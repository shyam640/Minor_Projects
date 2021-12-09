from PIL import Image           # Displaying Images
from fpdf import FPDF           # For creating pdf
import sys                          # importing system
import argparse                    # importing agrparse to pass arguments in terminal such as type of font
import cv2                   # This library is best for image processing like face detection and characters recognising
import os                          # importing os simply to work with operating systems files and folders
import time                 # importing time module for time


ap = argparse.ArgumentParser()              # initializing argument parser
ap.add_argument("-f", "--font", required=True, help="font")             # what argument to be passed
args = vars(ap.parse_args())                        # passing argument

os.makedirs("../Output", exist_ok=True)                 # creating output directory if not present
os.makedirs("../PDF_Outputs", exist_ok=True)           # creating pdf_output directory if not present

background = Image.open("../Fonts/myfont/a4.jpg")       # opening background i.e. a4.png
SheetWidth = background.width                           # storing width of background
margin = 115
lineMargin = 115
allowedCharacters = '''ABCDEFGHIJKLMNOPQRSTUVWXYZ 
                        abcdefghijklmnopqrstuvwxyz 
                        #:,.?-!{}()[]'<>+=%^$@_;1234567890 "'''

wordsPerLine = 80
maxLenPerPage = 3349
pageNum = 1                                     # starting page

inputFilePath = "../input.txt"                  # input file path
writing = args["font"]                          # checking which font to use

lineGap = 150

FontType = "../Fonts/{}/".format(writing)

print("Starting.")

x, y = margin + 20, margin + lineGap          # x gap between words and y gap between lines

scale_percent = int(
    input("What percent of quality (between 40 to 100) you want in output file? ")
)

if scale_percent < 0 or scale_percent > 100 or scale_percent < 40:
    print("Please enter the quality betw given range!")
    time.sleep(5)
    sys.exit()


# function to give space
def space():
    global x, y

    space = Image.open("../Fonts/myfont/space.png")
    width = space.width
    x += width
    background.paste(space, (x, y))
    del space

# function to take writer to next line when line finishes
def newLine():
    global x, y

    x = margin + 20
    y += margin


# function to write alphabets
def writeAlphabet(path):
    global x, y

    letter = Image.open(path)               # taking image of character from the path
    
    background.paste(letter, (x, y))                # pasting image got to background
    x += letter.width                               # increasing length of characters in x direction


# Function to check if the content is out of the page so it can move to next page
def check_pageExceed():
    global writing, pageNum, background, x, y, margin, lineGap

    if y >= 3100:
        background.save("../Output/{}_output_{}.png".format(writing, pageNum))
        print("Saved Page: ", pageNum)
        bg = Image.open("../Fonts/myfont/a4.jpg")
        background = bg
        x, y = margin, margin + lineGap
        pageNum += 1


wasDQ = False


def ProcessNwrite(word):
    global x, y, background, pageNum, writing, margin, lineGap, wasDQ

    if x > SheetWidth - wordsPerLine * len(word):
        newLine()

    check_pageExceed()

    path = FontType
    for letter in word:
        # Conditions to check different characters
        if letter in allowedCharacters:
            if letter.isupper():
                path += "upper/{}".format(letter)
            elif letter.islower():
                path += "lower/{}".format(letter)
            elif letter.isnumeric():
                path += "digits/{}".format(letter)
            else:
                path += "symbols/"
                if letter == ",":
                    path += "comma"
                elif letter == ".":
                    path += "fullstop"
                elif letter == "!":
                    path += "exclamation"
                elif letter == "-":
                    path += "hiphen"
                elif letter == "#":
                    path += "hash"
                elif letter == "?":
                    path += "question"
                elif letter == "(":
                    path += "small_bracket_open"
                elif letter == ")":
                    path += "small_bracket_close"
                elif letter == ":":
                    path += "colon"
                elif letter == ";":
                    path += "semicolon"
                elif letter == "{":
                    path += "curly_bracket_open"
                elif letter == "}":
                    path += "curly_bracket_close"
                elif letter == "[":
                    path += "big_bracket_open"
                elif letter == "]":
                    path += "big_bracket_close"
                elif letter == "<":
                    path += "smaller_than"
                elif letter == ">":
                    path += "greater_than"
                elif letter == "=":
                    path += "equals"
                elif letter == "'":
                    path += "single_quote"
                elif letter == "%":
                    path += "percent"
                elif letter == "&":
                    path += "empersand"
                elif letter == "$":
                    path += "dollar"
                elif letter == "@":
                    path += "at_the_rate"
                elif letter == "*":
                    path += "asterisk"
                elif letter == "_":
                    path += "underscore"
                elif letter == "^":
                    path += "power"
                elif letter == '"' and wasDQ:
                    path += "double_quote_close"
                    wasDQ = False
                elif letter == '"':
                    path += "double_quote_open"
                    wasDQ = True
            path += ".png"

            writeAlphabet(path)                     # writing character
            path = FontType                         # changing path again to starting
        else:
            writeAlphabet("../Fonts/myfont/space.png")


def writeByLine(data):
    global x, y, background, pageNum, writing

    if data == "":
        newLine
    else:
        data = data.split(" ")
        check_pageExceed()

        for word in data:
            ProcessNwrite(word)
            space()


if __name__ == "__main__":
    try:
        file = open(inputFilePath, "r")
        content = file.read()
        # print(content)

        l = len(content)
        content = content.split("\n")

        print("Text Reading Completed.")
        for i in range(len(content)):
            writeByLine(content[i])
            newLine()
        print("Saved Page: ", pageNum)

        background.save("../Output/{}_output_{}.png".format(writing, pageNum))

        ImagesPath = [
            "../Output/{}_output_{}.png".format(writing, page)
            for page in range(1, pageNum + 1)
        ]

        print("Adding lines.")

        # Reading images from folder
        for path in ImagesPath:
            img = cv2.imread(path, cv2.IMREAD_COLOR)
            x, y = 0, 228

            cv2.line(img, (lineMargin - 20, 0), (lineMargin - 20, 3508), (0, 0, 0), 3)
            cv2.line(img, (x, y), (x + 2480, y), (0, 0, 0), 2)

            while y <= 3349:
                cv2.line(img, (x, y), (x + 2480, y), (0, 0, 0), 2)
                y += lineMargin

            width = int(img.shape[1] * scale_percent / 100)
            height = int(img.shape[0] * scale_percent / 100)
            dim = (width, height)

            mimage = cv2.resize(img, dim, interpolation=cv2.INTER_NEAREST)
            cv2.imwrite(path, mimage)

        height, width = Image.open(ImagesPath[0]).size
        pdf = FPDF(unit="pt", format=(height, width))

        for i in range(0, pageNum):
            pdf.add_page()
            pdf.image(ImagesPath[i], 0, 0)

        print("Saving the pdf.")
        pdf_name = "../PDF_Outputs/{}_Output.pdf".format(writing)
        pdf.output(pdf_name, "F")

        # you can remove unnecessay files like images if not required
        # print("Removing unnecessary files.")
        # for path in ImagesPath:
        #     os.remove(path)

        print("Done.")
        print("Find your output at " + pdf_name + ".")
        time.sleep(5)
    except Exception as E:
        pass
        print(E, "Try again!")
