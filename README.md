# Ts md edit site
 A typescript app that lets users with permission edit a websites contents in markdown. Uses [marked](https://github.com/markedjs/marked) to enable editing in markdown. Backend made with express & better-sqlite3. Uses express-session for the login form. Uses zlib library to compress & decompress the data that is inserted in to the db to make it easier to store large amounts of contents.
## How to run
 Navegate to ` ts_md_esite_code ` and run ` npm install ` on first install or when cloning, then navigate to the ` dist ` folder and use ` node server.js `. Then use ` pip install ` to get the ` .venv ` folder & the dependencies, to run the python file use ` python -m uvicorn imageUpload:app --reload `. When updating the ts files use ` npx tsc ` before running.