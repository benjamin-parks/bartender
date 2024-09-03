const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes/index');
const cors = require('cors');
//Not necessary right now but could be used later if we want to add some variable function such as a favorited icon. 
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));


const sess = {
  secret: 'AslapiBP',
  cookie: {
    //This is give the cookie a hour 
    maxAge: 60*60*1000,
    //Display type will be http
    httpOnly: true,
    // makes it so the cookies can be set over a http connection not just a https connection
    secure: false,
    //Cookie stays strictly within this sites domain
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
});