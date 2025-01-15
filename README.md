Sample framework for playwright tests with nodeJs using Javascript
The application used in the test is a dummy ecommerce site - https://ecommerce-playground.lambdatest.io/index.php?route=common/home
Used page object model to add locators for elements and record their interactions for a business method
tests call the methods from the page object. Added integrations to wait for certain api calls in the devtools to finish before proceeding to next step and asserting on the api call response status code.
