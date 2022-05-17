describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://chercher.tech/practice/popups')
		await $("//input[@name='alert']").click()
		const alertText = await browser.getAlertText()
        console.log("Text is : " + alertText)

    });
});

