const getData = require(./app.js);

test('properly gets the country name', () => {
  const data = await getData('http://api.geonames.org/searchJSON?q=Paris&maxRows=10&username=dohys');
  expect(data.geonames[0].countryName).toBe("France");
});