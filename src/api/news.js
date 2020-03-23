import request from "@/utils/request";

export function getQdysjList(params) {
  return request({
    url: "http://jskou.com:3003/contents/list?type=0",
    method: "get",
    params,
  });
}

export function getFbzbList(params) {
  return request({
    url: "http://jskou.com:3003/contents/list?type=1",
    method: "get",
    params,
  });
}

export function getKyzgList(params) {
  return request({
    url: "/getKyzgList",
    method: "get",
    params,
  });
}

export function getJjList(params) {
  return request({
    url: "/getJjList",
    method: "get",
    params,
  });
}

export function getZgzfList(params) {
  return request({
    url: "/getZgzfList",
    method: "get",
    params,
  });
}

export function getLhgList(params) {
  return request({
    url: "/getLhgList",
    method: "get",
    params,
  });
}

export function getUizgList(params) {
  return request({
    url: "/getUizgList",
    method: "get",
    params,
  });
}

export function getZkList(params) {
  return request({
    url: "/getZkList",
    method: "get",
    params,
  });
}

export function getRyfdbkList(params) {
  return request({
    url: "/getRyfdbkList",
    method: "get",
    params,
  });
}
