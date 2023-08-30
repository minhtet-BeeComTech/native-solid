import {useEffect} from 'react';

import Navigate from 'navigations';

export default (props: any) => {
  useEffect(() => {
    handleInitial();
  }, []);

  const handleInitial = async () => {};

  return <Navigate initialRouteName="App" />;
};
