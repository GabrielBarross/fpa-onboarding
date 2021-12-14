export async function getSkuInfo(ctx: Context) {
  const {
    vtex:{
      route:{
        params: { skuId }
      },
    },
    clients:{ catalog }
  } = ctx

  try {
    const skuInfo = await catalog.getSkuById( skuId as string)
    ctx.body = skuInfo
    ctx.status = 200
  } catch (e) {
    console.log(e)
    ctx.body = "An error ocurred while fetching the data"
    ctx.status = 400
  }

}
