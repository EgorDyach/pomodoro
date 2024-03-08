import './icon.css';
import classNames from 'classnames';
import { IconFocus, IconHome, IconMenu, IconMinus, IconPen, IconPlus, IconPomidor, IconStatistic, IconStop, IconTime, IconTrash } from '../../assets/Icons';

export enum EIcons {
  focus = "focus",
  home = "home",
  menu = "menu",
  minus = "minus",
  pen = "pen",
  plus = "plus",
  pomidor = "pomidor",
  statistic = "statistic",
  stop = "stop",
  time = "time",
  trash = "trash"
}
interface IIconProps {
  typeOfIcon: EIcons;
  className?: string;
  size?: number;
}

export function Icon({typeOfIcon, className, size}: IIconProps) {
  const classes = classNames(
    `img-wh-${size}`, className,  `imgIcon`
  )
  return (
    <span className={classes}>
      {EIcons.focus === typeOfIcon && <IconFocus />}
      {EIcons.home === typeOfIcon && <IconHome />}
      {EIcons.menu === typeOfIcon && <IconMenu />}
      {EIcons.minus === typeOfIcon && <IconMinus />}
      {EIcons.pen === typeOfIcon && <IconPen />}
      {EIcons.plus === typeOfIcon && <IconPlus />}
      {EIcons.pomidor === typeOfIcon && <IconPomidor />}
      {EIcons.statistic === typeOfIcon && <IconStatistic />}
      {EIcons.stop === typeOfIcon && <IconStop />}
      {EIcons.time === typeOfIcon && <IconTime />}
      {EIcons.trash === typeOfIcon && <IconTrash />}
    </span>
  );
}
