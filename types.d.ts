export interface LocaleAwareRouteResolver {
	/**
	 * Resolve a route by its file-system name using the currently selected locale
	 */
	$route_(routeName: string): string;
}

declare module "vue/types/vue" {
	interface Vue extends LocaleAwareRouteResolver {
	}
}

declare module "@nuxt/types" {
	interface NuxtAppOptions extends LocaleAwareRouteResolver {
	}

	interface Context extends LocaleAwareRouteResolver {
	}
}

declare module "vuex/types/index" {
	interface Store<S> extends LocaleAwareRouteResolver {
	}
}
