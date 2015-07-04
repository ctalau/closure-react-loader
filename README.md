Closure React Loader
====================

[![build status](https://travis-ci.org/ctalau/closure-react-loader.svg)](https://travis-ci.org/ctalau/closure-react-loader)

In development mode, Google Closure Library loads scripts dynamically 
using the `goog.require` and `goog.provide` directives. However, if some
of the files use JSX syntax, they must be transformed before being loaded.

This library should be loaded before the Google Closure Library and after 
the React JSXTransformer. It overrides the default Closure script loading
to perform JSX transformation on the fly. 

It is a development tool. Do not use it in production!

[![browser support](https://ci.testling.com/ctalau/closure-react-loader.png)](http://ci.testling.com/ctalau/closure-react-loader)
