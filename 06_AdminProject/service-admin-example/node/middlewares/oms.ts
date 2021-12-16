export async function listOrders(ctx: Context) {
  const {
    clients: { oms },
  } = ctx

  try {
    const allOrders = await oms.listOrders()

    ctx.body = allOrders
    ctx.status = 200
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
    ctx.body = 'ERROR'
    ctx.status = 400
  }
}
