import { MuiMode } from './mui/mui-mode';
import { AppProviders } from './providers/AppProviders';

const App = () => {
  return (
    <div>
      <AppProviders>
        <div className="App">
          <MuiMode />
        </div>
      </AppProviders>
    </div>
  );
};

export default App;
