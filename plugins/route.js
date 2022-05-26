export default function(ctx, inject) {
	inject('route_', routeName => ctx.localePath({ name: routeName }));
}
