function hello(r) {
  r.return(200, 'Hello world!')
}

function redirect(r) {
  r.internalRedirect('@named')
}

export default { hello, redirect }
