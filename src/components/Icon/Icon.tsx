import './icon.css';
import classNames from 'classnames';
import { IconFocus, IconFunnyPomidor, IconHome, IconMenu, IconMinus, IconPen, IconPlus, IconPomidor, IconSettings, IconStatistic, IconStop, IconTime, IconTrash, IconUp } from '../../assets/Icons';

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
  trash = "trash",
  up = "up",
  IconFunnyPomidor = "IconFunnyPomidor",
  settings = "settings"
}
interface IIconProps {
  typeOfIcon: EIcons;
  className?: string;
  size?: number;
  fill?: string;
}

export function Icon({typeOfIcon, className, size, fill}: IIconProps) {
  const classes = classNames(
    `img-wh-${size}`, className, `imgIcon`
  )
  return (
    <span className={classes}>
      {EIcons.focus === typeOfIcon && <IconFocus />}
      {EIcons.home === typeOfIcon && <IconHome />}
      {EIcons.menu === typeOfIcon && <IconMenu />}
      {EIcons.minus === typeOfIcon && <IconMinus />}
      {EIcons.pen === typeOfIcon && <IconPen />}
      {EIcons.plus === typeOfIcon && <IconPlus />}
      {EIcons.pomidor === typeOfIcon && <IconPomidor fill={fill} />}
      {EIcons.statistic === typeOfIcon && <IconStatistic fill={fill} />}
      {EIcons.stop === typeOfIcon && <IconStop />}
      {EIcons.time === typeOfIcon && <IconTime />}
      {EIcons.trash === typeOfIcon && <IconTrash />}
      {EIcons.up === typeOfIcon && <IconUp />}
      {EIcons.settings === typeOfIcon && <IconSettings fill={fill} />}
      {EIcons.IconFunnyPomidor === typeOfIcon && <IconFunnyPomidor />}
    </span>
  );
}
