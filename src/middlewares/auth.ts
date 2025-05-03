import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import UserModel from "@/models/user";
import { Strategy as JwtStrategy } from "passport-jwt";

export const validateAuth = passport.authenticate("jwt", { session: false });

export const useGoogleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI || "",
  },
  async function (_, __, profile, done) {
    try {
      let user = await UserModel.findOne({ passportId: profile.id });

      if (!user) {
        user = await UserModel.create({
          passportId: profile.id,
          firstName: profile.name?.givenName || "",
          lastName: profile.name?.familyName || "",
          displayName: profile.displayName,
          email: profile.emails?.[0]?.value || "",
          avatar: profile.photos?.[0]?.value,
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error as Error, undefined);
    }
  }
);

export const useGoogleCallback = passport.authenticate("google", {
  failureRedirect: `${process.env.FRONTEND_URL}`,
  session: false,
});

export const useJwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: function (req: any) {
      let token = null;
      if (req && req.cookies) token = req.cookies["token"];
      return token;
    },
    secretOrKey: process.env.JWT_SECRET as string,
  },
  async (jwtPayload, done) => {
    try {
      const user = await UserModel.findById(jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  }
);
