import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

// A solution for React 16 complaining of missing rAF.
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

