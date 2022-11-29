const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

//protocolo://user:pass@host:port/database
