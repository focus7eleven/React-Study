import React, { Component } from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{height:'60px'}}></div>
        <div className={"one-px-border " + styles.root}>
          <NavLink
            pathUrl="/"
            icoName={"i-zhuye42un"}
            active={styles.navOne}
            linkName="首页"
            onlyActiveOnIndex
          />
          <NavLink
            pathUrl="/shop"
            icoName="i-haodian42un"
            active={styles.navTwo}
            linkName="好店"
          />
          <NavLink
            pathUrl="/coupon"
            icoName="i-youhui42un"
            active={styles.navThree}
            linkName="优惠"
          />
          <NavLink
            pathUrl="/tour"
            icoName="i-zhoubian42un"
            active={styles.navFour}
            linkName="周边"
          />
          <NavLink
            pathUrl="/user"
            icoName="i-wode42un"
            active={styles.navFive}
            linkName="我的"
          />
        </div>
      </div>
    )
  }
}

