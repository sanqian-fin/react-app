import React from 'react'

import firebase from '../../utils/firebase'

export default function ProfileMenu() {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ul>
      <li onClick={logout}>logout</li>
    </ul>
  )
}
