const Page = require('./helpers/page'); // is our CustomPage but we don't need to call it that so its Page

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('localhost:3000');
});

afterEach(async () => {
  await page.close();
});

test('The header has the correct text', async () => {
//  const text = await page.$eval('a.brand-logo', el => el.innerHTML);  now that getContentsOf was created, don't need this
  const text = await page.getContentsOf('a.brand-logo');

  expect(text).toEqual('Blogster');
});

test('clicking login starts oauth flow', async () => {
  await page.click('.right a');

  const url = await page.url();
  // escaping the periods so that we don't mess up the regex stuff
  expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
//  const id = '5caa85d3a27b45a35bc95a7c'; // from mlab mongo id  not using anymore due to user factory
  await page.login();

  const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

  expect(text).toEqual('Logout');
});
