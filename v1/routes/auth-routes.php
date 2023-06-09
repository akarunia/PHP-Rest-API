<?php

global $router;
/**
 * @api {get} /user/:id Read data of a User
 * @apiVersion 0.0.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() { return; }

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.0.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {String} id         The new Users-ID.
 *
 */
function postUser() { return; }

/**
 * @api {put} /user/:id Change a new User
 * @apiVersion 0.0.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiUse"
 *
 * @apiParam {String} name Name of the User.
 *
 */
function putUser() { return; }

function getLogout() { return; }

function postAddCard() { return; }

function getCardList() { return; }

function getCardDetail() { return; }

function postSetPIN() { return; }

function postDeleteCard() { return; }

function getTransactionList() { return; }

function getTransactionDetail() { return; }

function postInquiryTransaction() { return; }

function postTransaction() { return; }

function getLogin() { return; }




$router->post('/login', 'Auth.login');
$router->post('/sign-up', 'Auth.signUp');
$router->get('/me', 'Auth.me', true)
        ->delete('/me', 'Auth.delete', true)
        ->patch('/me', 'Auth.update', true);
?>
