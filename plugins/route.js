export default function(ctx, inject) {
	inject('route_', (routeName, locale = undefined) => {
		return ctx.localePath({ name: routeName }, locale);
	});
}
