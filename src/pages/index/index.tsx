import { Fragment, useMemo, useState } from 'react';
import { ScrollView, View } from '@tarojs/components';

import './index.scss';

const Index = () => {
  const items = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < 20; i++) {
      temp.push(i);
    }
    return temp;
  }, []);

  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <ScrollView scrollWithAnimation scrollY className="scroll-view">
        {items.map((item) => (
          <View className='item'>{`item-${item}`}</View>
        ))}
        <View className='button' onClick={() => setShow(true)}>
          点击
        </View>
      </ScrollView>
      {show && <View onClick={() => setShow(false)} className="modal"></View>}
    </Fragment>
  );
};

export default Index;
