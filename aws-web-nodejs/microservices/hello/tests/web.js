const expect = require('chai').expect;

describe('hello world web app', () => {
  it('should be a specific page title', () => {
    browser.url('/');
    browser.getTitle().should.be.equal('Hello World !!!');
  });

  // it('should be 4 material buttons rendered with React', () => {
  //   browser.url('/');
  //   const buttonsCount = browser.element('#buttons').getText().split('\n').length;
  //   expect(buttonsCount).to.be.equal(4);
  // });
});
