
Command to open cypress UI
Terminal --code! npx cypress open

beforeEach is used to do soemthing before each single test
before do the same but at suite level

the sames happen for afterEach and after

(do an example for the fourth ones with --code!)

it.only allows you to execute ONLY that single test
it.skip allows you to skip that single test

(do an example for both ones with --code!)

These ones could exist more that once in the code

viewport
-- cypress allows you to select an specific viewport by selecting it manually example

(Do an example with --code!)

But also they provide us a list with the compatible devices and predefined resolutions:

(Format the table to a table in this file .md)
Preset	width	height
ipad-2	768	1024
ipad-mini	768	1024
iphone-3	320	480
iphone-4	320	480
iphone-5	320	568
iphone-6	375	667
iphone-6+	414	736
iphone-7	375	667
iphone-8	375	667
iphone-x	375	812
iphone-xr	414	896
iphone-se2	375	667
macbook-11	1366	768
macbook-13	1280	800
macbook-15	1440	900
macbook-16	1536	960
samsung-note9	414	846
samsung-s10	360	760


(Create another table right here, this one must be with the most important commands on the CLI for a begginer, commands that the user have to know,
even the setup commands, right below it, another one showing the commands which helps the user to run their suits, specs etc, example: npx run --spec "cypress/e2e/invoke.cy.js", also commands as --browser, their parameters as well, --headed, --record etc, and their explanation of course)




!IMPORTANT (This is a comment to the AI who reads this): This whole file it's just a draft, you must to improve it highly, this must be a readme.md file so, give it format, if something says --code! or somethig about to needs to have a table format, it needs to be that way.  