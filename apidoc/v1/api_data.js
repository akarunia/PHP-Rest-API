define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.0.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiUse&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a new User",
    "version": "0.0.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "Login",
    "version": "0.0.0",
    "name": "Login",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Logout",
    "version": "0.0.0",
    "name": "Logout",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/addCard",
    "title": "Add a New Card",
    "version": "0.0.0",
    "name": "addCard",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getCardList",
    "title": "Collect a card list",
    "version": "0.0.0",
    "name": "getCardList",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getCardDetail/:id",
    "title": "Change a new User",
    "version": "0.0.0",
    "name": "getCardDetail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/setPIN/:id",
    "title": "Set Pin",
    "version": "0.0.0",
    "name": "setPIN",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/deleteCard",
    "title": "Delete a Card",
    "version": "0.0.0",
    "name": "deleteCard",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getTransactionList",
    "title": "Collect transactions list",
    "version": "0.0.0",
    "name": "getTransactionList",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getTransactionDetail",
    "title": "Collect a detail of the transaction",
    "version": "0.0.0",
    "name": "getTransactionDetail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/inquiryTransaction",
    "title": "Inquire Transaction",
    "version": "0.0.0",
    "name": "inquiryTransaction",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/postingTransaction",
    "title": "Post a Transaction",
    "version": "0.0.0",
    "name": "postingTransaction",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "v1/routes/auth-routes.php",
    "groupTitle": "User"
  }
] });
