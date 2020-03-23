import { storage, tokenTableName } from "@/settings";
import cookie from "js-cookie";

export function getToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.getItem(tokenTableName);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.getItem(tokenTableName);
    } else if ("cookie" === storage) {
      return cookie.get(tokenTableName);
    } else {
      return localStorage.getItem(tokenTableName);
    }
  } else {
    return localStorage.getItem(tokenTableName);
  }
}

export function setToken(accessToken) {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.setItem(tokenTableName, accessToken);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.setItem(tokenTableName, accessToken);
    } else if ("cookie" === storage) {
      return cookie.set(tokenTableName, accessToken);
    } else {
      return localStorage.setItem(tokenTableName, accessToken);
    }
  } else {
    return localStorage.setItem(tokenTableName, accessToken);
  }
}

export function removeToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.removeItem(tokenTableName);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.clear();
    } else if ("cookie" === storage) {
      return cookie.remove(tokenTableName);
    } else {
      return localStorage.removeItem(tokenTableName);
    }
  } else {
    return localStorage.removeItem(tokenTableName);
  }
}
