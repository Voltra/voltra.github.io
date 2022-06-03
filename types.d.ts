export interface LocaleAwareRouteResolver {
	/**
	 * Resolve a route by its file-system name using the currently selected locale
	 */
	$route_(routeName: string, locale?: string): string;
}

export interface I18nMeta {
	$i18nMakeMeta(obj?: Record<string, unknown>): Record<string, unknown>;
}

export interface Injections extends LocaleAwareRouteResolver, I18nMeta {
}

declare module "vue/types/vue" {
	interface Vue extends Injections {
	}
}

declare module "@nuxt/types" {
	interface NuxtAppOptions extends Injections {
	}

	interface Context extends LocaleAwareRouteResolver {
	}
}

declare module "vuex/types/index" {
	interface Store<S> extends Injections {
	}
}
