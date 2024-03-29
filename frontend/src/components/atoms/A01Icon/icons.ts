import { ReactComponent as logo } from '../../../assets/svg/logo.svg';
import { ReactComponent as logoColor } from '../../../assets/svg/logo-color.svg';
import { ReactComponent as spinner } from '../../../assets/svg/spinner.svg';
import { ReactComponent as backArrow } from '../../../assets/svg/back-arrow.svg';
import { ReactComponent as googleIcon } from '../../../assets/svg/google-button.svg';
import { ReactComponent as back } from '../../../assets/svg/back.svg';
import { ReactComponent as addLarge } from '../../../assets/svg/add-large.svg';
import { ReactComponent as add } from '../../../assets/svg/add.svg';
import { ReactComponent as calendar } from '../../../assets/svg/calendar.svg';
import { ReactComponent as close } from '../../../assets/svg/close.svg';
import { ReactComponent as collab } from '../../../assets/svg/collab.svg';
import { ReactComponent as filter } from '../../../assets/svg/filter.svg';
import { ReactComponent as maximize } from '../../../assets/svg/maximize.svg';
import { ReactComponent as menu } from '../../../assets/svg/menu.svg';
import { ReactComponent as search } from '../../../assets/svg/search.svg';
import { ReactComponent as user } from '../../../assets/svg/user.svg';

export const icons = {
  logo,
  logoColor,
  spinner,
  backArrow,
  googleIcon,
  back,
  addLarge,
  add,
  calendar,
  close,
  collab,
  filter,
  maximize,
  menu,
  search,
  user,
};

export type Icon = keyof typeof icons;
