import { ONE_DAY } from "../constants/index.js";
import { loginUser, logoutUser, refreshSession, registerUser, requestResetToken, resetPassword } from "../services/auth.js";

const setupSession = (res, session) => {
    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });
    res.cookie('sessionId', session._id, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });
};

export const registerUserController = async (req, res) => {
    const user = await registerUser(req.body);

    res.status(201).json({
        status: 201,
        message: 'Successfully registered a user!',
        data: user,
    });
};

export const loginUserController = async (req, res) => {
    const session = await loginUser(req.body);

    res.cookie('sessionId', session._id, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });
    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });

    res.json({
        status: 201,
        message: 'Successfully logged in an user!',
        data: {accessToken: session.accessToken,},
    });
};

export const logoutUserController = async (req, res) => {
    await logoutUser({
        sessionId: req.cookies.sessionId,
        refreshToken: req.cookies.refreshToken,
    });

    res.clearCookie('sessionId');
    res.clearCookie('refreshToken');

    res.status(204).send();
};

export const refreshSessionController = async (req, res) => {
    const session = await refreshSession({
        sessionId: req.cookies.sessionId,
        refreshToken: req.cookies.refreshToken,
    });

setupSession(res, session);

res.json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: {accessToken: session.accessToken,},
});
};

export const requestResetEmailController = async (req, res) => {
    await requestResetToken(req.body.email);
    res.json({
        message: 'Reset password email was successfully sent! Open your email service to see it!',
        status: 200,
        data: {},
    });
};

export const resetPasswordController = async (req, res) => {
    await resetPassword( req.body);
    res.json({
        message: 'Congrats! Password was successfully reset!',
        status: 200,
        data: {},
    });
};