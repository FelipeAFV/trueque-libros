import passport from 'passport';
import JwtStrategy from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt'
import secret from './secret'


passport.use(new JwtStrategy.Strategy({
    jwtFromRequest: req=>req.cookies.auth,
    secretOrKey: secret.key
}, (payload, done) => {
    try {
        done(null,payload)
        
    } catch (error) {
        done(error,false)
    }
}))
