import os 
from shutil import copyfile, rmtree

_BASEPATH = os.getcwd()

_Build_Dir = os.path.join(_BASEPATH, 'extension_build')

_broswerActionPath = os.path.join(_Build_Dir, 'src','browser_action')

_css_browseractionPath = os.path.join(_broswerActionPath, 'css')


def move_asset_files_into_one_folder():
    # get all the files in _css_browseractionPath
    if os.path.isdir(_css_browseractionPath):
        CssFiles = os.listdir(_css_browseractionPath)
        
        for cssFile in CssFiles:
            os.rename(os.path.join(_css_browseractionPath, cssFile), os.path.join(_broswerActionPath, cssFile))

    reset_css_file = os.path.join(_BASEPATH,'node_modules', 'reset-css','reset.css')

    copyfile(reset_css_file,  os.path.join(_broswerActionPath, 'reset.css'))

    rmtree(_css_browseractionPath)

def rereference_css_js_files_in_the_main_html():
    htmlFile = os.path.join(_broswerActionPath, 'index.html')
    with open(htmlFile, 'r+') as f:
        htmlContent = f.read()

    htmlContent = htmlContent.replace('/css/', '').replace('/js/', '').replace('href=/', 'href=').replace('src=/', 'src=')

    with open(htmlFile, 'w+') as f:
        f.write(htmlContent)

def run():
    move_asset_files_into_one_folder()
    rereference_css_js_files_in_the_main_html()
    print('\n>> Assets moved and html updated approriately\n'.upper())


if __name__ == "__main__":
    run()