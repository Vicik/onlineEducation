export default defineNuxtRouteMiddleware((to, from) => {
  const titleObj: any = {
    group: {
      title: "拼团",
      column: "column-4",
    },
    flashsale: {
      title: "秒杀",
      column: "column-4",
    },
    live: {
      title: "直播",
      column: "column-4",
    },
    column: {
      title: "专栏",
      column: "column-4",
    },
    course: {
      title: "课程",
      column: "column-4",
    },
  };
  const typeStr = to.params.type as string;
  if (Object.keys(titleObj).includes(typeStr)) {
    const typeObj = titleObj[typeStr as string];
    const layoutStr = typeObj.column;
    setPageLayout(layoutStr, {
      title: typeObj.title,
    });
  }
});
