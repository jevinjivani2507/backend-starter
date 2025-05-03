import passport from "passport";
import UserModel from "@/models/user";
import { Strategy as JwtStrategy } from "passport-jwt";

export const validateAuth = passport.authenticate("jwt", { session: false });

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
      console.log("JWT", jwtPayload.id);
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
