import styles from './index.less';
import React from 'react';
import * as test from 'vue3';
// import { useEffect } from 'react';

export default function IndexPage() {
  let url = 'www.jian2shu.com/abc/def';

  let asda = fetch('www.baidu.com/api/com/list');

  fetch('www.jian2shu.com/api/com/list');

  console.log('www.jian2shu.com/api/com/list');

  axios.get('www.jian3shu.com/api/com/list', 'ab');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
