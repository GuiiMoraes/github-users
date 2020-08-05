import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import './styles.css';

function loadingIcon() {
  return <AiOutlineLoading className="rotate-loading" size={20} />;
}

export default loadingIcon;
