const webdriver = require('selenium-webdriver');
const By = webdriver.By;
let i = 0;

const arr = ['Heaven Send', 'Numbered', 'Stagnant', 'Triumph', 'Stars'];

const driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

const executeLolz = () => {
	driver.get('https://docs.google.com/forms/d/e/1FAIpQLScFH9EzhMbUp7OYkz8Lz2BRv1qgZR_bRmjj0GlLv7JbRSKlyw/viewform?fbzx=3294979105594152000');

	driver.findElements(By.className('freebirdFormviewerViewItemsCheckboxLabel'))
		.then((elements) => {
			elements.forEach((element) => {
				element.getText().then((text) => {
					if (arr.includes(text)) {
						element.click();
					}
				});
			});
		})
		.then(() => {
			driver.findElement(By.className('quantumWizButtonPaperbuttonLabel')).click();
			console.log(++i);
		});
};

for (let i = 0; i < 100000; i++) {
	executeLolz();
}
