import request from "@/utils/request";

export function getPrettierList(data) {
  return request({
    url: "/markdown/getPrettierList",
    method: "post",
    data,
  });
}

export function getVueApiList(data) {
  return request({
    url: "/markdown/getVueApiList",
    method: "post",
    data,
  });
}
