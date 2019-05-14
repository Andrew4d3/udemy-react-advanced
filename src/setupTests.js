import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// With this we're wiring up Enzyme into our Project
Enzyme.configure({ adapter: new Adapter()});

// Check commit comments to se notes for this lecture