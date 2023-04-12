import { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import { showMessage } from 'components/Message';

const socket = io.connect("http://localhost:3005");

export const MotivatingModal = () => {

  // объявляем обработчик события userRegister
  const handleUserRegister = useCallback((data) => {
    console.log(data)
    showMessage(data.name)
  }, [])

  const handleFavorite = useCallback((data) => {
    console.log(data)
    showMessage(`You add to favorites ${data.favorite}`)
  }, [])

  // подписка на события сокета при монтировании компонента
  useEffect(() => {
    console.log('object')
    socket.on("userRegister", handleUserRegister);
    socket.on("favoriteRecipe", handleFavorite);
   
    // отписываемся от события при размонтировании компонента
    return () => {
      socket.off("userRegister", handleUserRegister);
      socket.off("favoriteRecipe", handleFavorite);
    };
  }, [handleUserRegister]);

  // return (
  //   <>
  //      </>
  // )
}

