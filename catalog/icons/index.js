import {
  FlBook,
  StBook,
  OlBook,
  UbBook
} from './components/Icons';

const MyIcons = () => (
  <div className="MyIcons">
    <FlBook size={10} />
    <StBook size={20} />
    <OlBook style={{ fill: 'red' }} />
    <UbBook style={{ fill: 'green' }} />
  </div>
);
