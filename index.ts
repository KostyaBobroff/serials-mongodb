import express, {Request} from 'express';
import * as path from 'path';
import * as exphbs from 'express-handlebars'
import * as Handlebars from 'handlebars';

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

import chalk from 'chalk';

import SerialsModel from './models/serials';
import { normalizeTVSerials } from './models/normalizers';

const app = express();

const hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: {
    inc: (value: string, options: any) => {
      return parseInt(value) + 1;
    }
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));


app.get('/', async (req: Request<any, any, any, {serial?: string}>, res) => {
  // await SerialsModel.saveMocks();
  const data = await SerialsModel.getSerialsListByTitle(req.query.serial);

  res.render('index' ,{
    isIndex: true,
    serials: data,
    showLinkToAllSerials: Boolean(req.query.serial)
  });
});

app.get('/serial/:id', async (req: Request<{id: string}>, res) => {
  const data = await SerialsModel.getSerialsById(req.params.id);

  res.render('serial', {
    serial: data
  });
});

app.get('/create', async (_, res) => {
  res.render('create', {
    isCreate: true
  });
});

app.post('/create', async (req, res) => {
  const tvSerial = normalizeTVSerials(req.body);

  await SerialsModel.saveTvSerial(tvSerial);
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is running on port ${PORT}`));
});