import { DataContext } from './DataContext';
// import ChildComponent from './ChildComponent';
import Gallery from './Gallery';

function Parent() {
  return (
    <DataContext.Consumer>
      {({ items }) => (
        <div>
          <Gallery items={items} />
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default Parent;