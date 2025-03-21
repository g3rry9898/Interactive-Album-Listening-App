"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_google_login_1 = require("react-google-login");
var fa_1 = require("react-icons/fa");
function Login(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var toast = react_1.useToast();
    var clientId = '423440158487-sqbmb1fuqt4576l0hkhco1ovle5fldmo.apps.googleusercontent.com';
    var handleGoogleSuccess = function (response) {
        toast({
            title: 'Login Successful',
            description: "Welcome, " + response.profileObj.name + "!",
            status: 'success',
            duration: 3000
        });
        // Handle successful login, e.g., save user details or redirect
        console.log('User Info:', response.profileObj);
        onClose(); // Close the modal after successful login
    };
    var handleGoogleFailure = function (error) {
        toast({
            title: 'Login Failed',
            description: 'An error occurred during Google Sign-In. Please try again.',
            status: 'error',
            duration: 3000
        });
        console.error('Error:', error);
    };
    return (React.createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose },
        React.createElement(react_1.ModalOverlay, { backdropFilter: "blur(10px)" }),
        React.createElement(react_1.ModalContent, { bg: "gray.900" },
            React.createElement(react_1.ModalHeader, { color: "white" }, "Login / Sign Up"),
            React.createElement(react_1.ModalCloseButton, { color: "white" }),
            React.createElement(react_1.ModalBody, { pb: 6 },
                React.createElement(react_1.VStack, { spacing: 4 },
                    React.createElement(react_google_login_1.GoogleLogin, { clientId: clientId, render: function (renderProps) { return (React.createElement(react_1.Button, { w: "full", leftIcon: React.createElement(react_1.Icon, { as: fa_1.FaGoogle }), onClick: renderProps.onClick, disabled: renderProps.disabled, colorScheme: "red" }, "Continue with Google")); }, onSuccess: handleGoogleSuccess, onFailure: handleGoogleFailure, cookiePolicy: 'single_host_origin' }))))));
}
exports["default"] = Login;
