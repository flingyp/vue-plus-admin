# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.10.0](https://github.com/flingyp/vadmire-admin/compare/v1.9.0...v1.10.0) (2024-02-22)

### Features

- modify fetchUrl and fetchKey to optional params of DeployReloadOptions ([9bceef4](https://github.com/flingyp/vadmire-admin/commit/9bceef4c463747d90419f9c6dbd3b0904564e41f))

## [1.9.0](https://github.com/flingyp/vadmire-admin/compare/v1.8.0...v1.9.0) (2024-01-24)

### Features

- add DeployReload class to check whether system needs to be updated ([eeeb614](https://github.com/flingyp/vadmire-admin/commit/eeeb6143d923a89f64d83eeeea0e282b8648fe73))
- add isOpenDeployReload config to handle deploy reload ([d833098](https://github.com/flingyp/vadmire-admin/commit/d8330984902cc5927fa81f2ad0d859267a360971))
- add judge about fetchUrl is required in DeployReload ([a8a132b](https://github.com/flingyp/vadmire-admin/commit/a8a132bc8dc1746bad6b900bc97983dd0f6b3c0b))
- add NaiveUIComponent page ([5e21fa2](https://github.com/flingyp/vadmire-admin/commit/5e21fa227c3d82174e837538f51b027bf2a147b7))
- add vite-plugin-vue-devtools plugin ([725225e](https://github.com/flingyp/vadmire-admin/commit/725225e4746f218472776df00d887b6f3ed5cc58))
- breadcrumb add menu icon ([246753b](https://github.com/flingyp/vadmire-admin/commit/246753be04bc7435a703f80c5ed156ff536a83f6))
- extract local constants to LOCAL_KEY file ([eeb61b9](https://github.com/flingyp/vadmire-admin/commit/eeb61b9c5ebcc4b306d4e60f4806319b5094c5f2))

### Bug Fixes

- dealing with code formatter caused error ([3d0d60b](https://github.com/flingyp/vadmire-admin/commit/3d0d60b59f56c43030dbcf4ab68f74c1fbab7d4b))
- not found `@flypeng/tool/browser` package declare file ([1a84a86](https://github.com/flingyp/vadmire-admin/commit/1a84a86dae49296184bd3226a472b3feaf9536ea))

### [1.8.1](https://github.com/flingyp/vadmire-admin/compare/v1.8.0...v1.8.1) (2023-12-12)

### Features

- add NaiveUIComponent page ([5e21fa2](https://github.com/flingyp/vadmire-admin/commit/5e21fa227c3d82174e837538f51b027bf2a147b7))

### Bug Fixes

- dealing with code formatter caused error ([3d0d60b](https://github.com/flingyp/vadmire-admin/commit/3d0d60b59f56c43030dbcf4ab68f74c1fbab7d4b))

## [1.8.0](https://github.com/flingyp/vadmire-admin/compare/v1.7.0...v1.8.0) (2023-10-30)

### Features

- add watermark plugin ([352a4d2](https://github.com/flingyp/vadmire-admin/commit/352a4d269893b6a894ea598ee4635b74dc0c40e8))
- login add keyboard event ([3eab077](https://github.com/flingyp/vadmire-admin/commit/3eab0776ba565dcee60bab0a3b7b385789743df4))
- Naive UI language config when switch language ([b087f10](https://github.com/flingyp/vadmire-admin/commit/b087f10fbeef33fcb375bc7efa1e2e30b9dc8c48))
- SystemAuth page add theme switch icons ([8d7fc1f](https://github.com/flingyp/vadmire-admin/commit/8d7fc1fa06d79daaeb7e6a6cedf2976c810eb627))
- Watermark text color adapt system dark mode ([61cc00d](https://github.com/flingyp/vadmire-admin/commit/61cc00dc20db195a652a860ecbd132730088e6ea))

### Bug Fixes

- adapt watermark zIndex value ([13a3d7d](https://github.com/flingyp/vadmire-admin/commit/13a3d7d274be44e8c8e1ed8a48726f85c4be934f))
- adjust contentContainerHeight variable content height ([172331e](https://github.com/flingyp/vadmire-admin/commit/172331e8f63de5f283eee7520742b1a986b31ba7))

## [1.7.0](https://github.com/flingyp/vadmire-admin/compare/v1.6.0...v1.7.0) (2023-09-26)

### Features

- add Authorized common component ([9f4dea8](https://github.com/flingyp/vadmire-admin/commit/9f4dea83f8f7ea9ec6d1972f8384e48bf4812534))
- add NBackTop component ([88136e7](https://github.com/flingyp/vadmire-admin/commit/88136e7015dba20e3afd0d0078357e4dc8bd9024))
- add network online checking ([549cb3d](https://github.com/flingyp/vadmire-admin/commit/549cb3d2fedbc9b52434ebe259a9e970e12e52ab))
- add tabBar item to reload system ([ab580c9](https://github.com/flingyp/vadmire-admin/commit/ab580c9bf59a9d52cff5135860b30f6bd1f6ee06))
- add useConvert composable to convert data structure from api ([cf33e1f](https://github.com/flingyp/vadmire-admin/commit/cf33e1fcfe5cc2a37c30ee3485875107d6aae382))
- BaseSearchMenu transition effect ([7d0f734](https://github.com/flingyp/vadmire-admin/commit/7d0f734540b9b380de737a1e16a0b77def9158c1))
- integrate @flypeng/stylelint-config to check style ([51b1876](https://github.com/flingyp/vadmire-admin/commit/51b1876598956165da7e0b9f5cad450b7fc0794e))
- integrate LogicFlow plugin ([5954aec](https://github.com/flingyp/vadmire-admin/commit/5954aec84ddf88a4a33abd61ca118e3ea08ef27a))
- integrate vite-plugin-pwa plugin ([dd74d6b](https://github.com/flingyp/vadmire-admin/commit/dd74d6bc01fa052e4617a8ba16b09276a29db51d))

### Bug Fixes

- match sfc files ([1394ee2](https://github.com/flingyp/vadmire-admin/commit/1394ee2882589d72b9cde825dcf487967d7139c1))

## [1.6.0](https://github.com/flingyp/vadmire-admin/compare/v1.5.0...v1.6.0) (2023-09-08)

### Features

- add useEcharts composable ([d3e295c](https://github.com/flingyp/vadmire-admin/commit/d3e295c491bfdb81e370180d9b6daa9af0e7d1f0))
- add usePermission composable ([20be43a](https://github.com/flingyp/vadmire-admin/commit/20be43a70debc32902d03e8c9b5c15f76c626ed2))
- integrate useHtml2Image composable ([b105aeb](https://github.com/flingyp/vadmire-admin/commit/b105aeb4902cf6360ec23fbb8f78788691cf0d18))

## [1.5.0](https://github.com/flingyp/vadmire-admin/compare/v1.4.0...v1.5.0) (2023-07-03)

### Features

- add BaseTableSearch component ([7470c8c](https://github.com/flingyp/vadmire-admin/commit/7470c8c7bae82a901168718f91c052c6bb2db2ac))
- add common BaseSpin component ([3b9013e](https://github.com/flingyp/vadmire-admin/commit/3b9013e39474715bb32067d396e675ecbb86e56f))
- change vditor and @wangeditor/editor cdn source ([ee2e0f1](https://github.com/flingyp/vadmire-admin/commit/ee2e0f19bd10fba5db7f1f30a6c58646666a9b0d))
- config global loading and useLoading default value is false ([5bfd2d3](https://github.com/flingyp/vadmire-admin/commit/5bfd2d3ed016d1d00b0c44ff7439fee3e536cced))
- integrate vuedraggable ([f048730](https://github.com/flingyp/vadmire-admin/commit/f048730373b250c7c6f61f067fbf785bc257c6d5))

### Bug Fixes

- Table page checkedRowKeys undefined when build:mock mode ([b500550](https://github.com/flingyp/vadmire-admin/commit/b500550f11a351ca85ddc386f7f2bb5f2e71c48c))

### [1.4.1](https://github.com/flingyp/vadmire-admin/compare/v1.4.0...v1.4.1) (2023-06-26)

### Features

- change vditor and @wangeditor/editor cdn source ([ee2e0f1](https://github.com/flingyp/vadmire-admin/commit/ee2e0f19bd10fba5db7f1f30a6c58646666a9b0d))

### Bug Fixes

- Table page checkedRowKeys undefined when build:mock mode ([b500550](https://github.com/flingyp/vadmire-admin/commit/b500550f11a351ca85ddc386f7f2bb5f2e71c48c))

## [1.4.0](https://github.com/flingyp/vadmire-admin/compare/v1.3.0...v1.4.0) (2023-06-25)

### Features

- BaseSearchMenu support depth fuzzy search ([475716f](https://github.com/flingyp/vadmire-admin/commit/475716f9bfec3e95038b0b4a0122cb829661b6d0))
- integrate dayjs ([3c7e14d](https://github.com/flingyp/vadmire-admin/commit/3c7e14dd321312a8b9acf1153851aef5d4b00edd))
- perfect BaseTable props ([93dd57c](https://github.com/flingyp/vadmire-admin/commit/93dd57c2c6d06e8edbb4bec5a38f28db22fff847))

### Bug Fixes

- handle search box console warning ([7d6cfe7](https://github.com/flingyp/vadmire-admin/commit/7d6cfe7b4c16e7d5461e7a3f3301a0b04eb77342))

## [1.3.0](https://github.com/flingyp/vadmire-admin/compare/v1.2.0...v1.3.0) (2023-06-16)

### Features

- add BaseLayoutItem component to switch layout mode ([082d53b](https://github.com/flingyp/vadmire-admin/commit/082d53b2e6495b6ee6af7188bb32ea1b12c145c2))
- add BaseSearchMenu component to search global menu ([3604786](https://github.com/flingyp/vadmire-admin/commit/36047861b577542e1691101f74a82773c3d1c426))
- add the v-clipboard directive ([42477a8](https://github.com/flingyp/vadmire-admin/commit/42477a811d421846fcd1adc6aabcb5bb472edc95))
- extract the vite.config.ts configuration content ([915db72](https://github.com/flingyp/vadmire-admin/commit/915db72400373d08add70a9af493f45c8337b96d))
- optimize building chunks ([5c7a468](https://github.com/flingyp/vadmire-admin/commit/5c7a4689594ffbbd10baec27c939c9f75b99fb3f))

### Bug Fixes

- add tab menu when user search menu ([999850c](https://github.com/flingyp/vadmire-admin/commit/999850c940e78d0c72d8a98903d2403af65df5df))
- handle GlobalTabBar hierarchy issue ([514b2b4](https://github.com/flingyp/vadmire-admin/commit/514b2b4a35f3d3103795b106c8b3360469a209cd))

## [1.2.0](https://github.com/flingyp/vadmire-admin/compare/v1.1.0...v1.2.0) (2023-06-08)

### Features

- add a sort variable and sort the system menu ([7ebca9d](https://github.com/flingyp/vadmire-admin/commit/7ebca9d35ae246117772ba5d955cb963dd12e5cc))
- add system tip ([999a601](https://github.com/flingyp/vadmire-admin/commit/999a6018811ce0b14847e91ecc5ba752e1750cfd))
- integrate i18n ([c08b782](https://github.com/flingyp/vadmire-admin/commit/c08b78212bec9d3af3b744e612aa4af5aeefd317))
- perfect GlobalSetting international text ([27f59df](https://github.com/flingyp/vadmire-admin/commit/27f59df46e90bb645bb201e0df374c92185c767e))
- perfect menu text internationalization ([d10c9d6](https://github.com/flingyp/vadmire-admin/commit/d10c9d6792bae56da7c0fc44ca7dee21e6e1e224))
- using SessionStorage to manage token ([7bc428f](https://github.com/flingyp/vadmire-admin/commit/7bc428f72d3e13a3b12ca139381dd5825b0aa44b))

### Bug Fixes

- fixed an issue with online images not loading ([235f7d4](https://github.com/flingyp/vadmire-admin/commit/235f7d4a1e4f21fb059fb268c6ef242b5adafdce))

## [1.1.0](https://github.com/flingyp/vadmire-admin/compare/v1.0.0...v1.1.0) (2023-05-26)

### Features

- add global BaseTableHandle component ([9b84f4a](https://github.com/flingyp/vadmire-admin/commit/9b84f4a16d2a7a2a3c12d95e19815008e94cf245))
- add guide page ([6001ea6](https://github.com/flingyp/vadmire-admin/commit/6001ea681795ba82826802e6b5e6f6cb404b1a50))
- add SYSTEM_HOME_ROUTE_NAME and config push route after login ([43a0260](https://github.com/flingyp/vadmire-admin/commit/43a0260a27587fb379825cf73a119b94017b8d3b))
- add useLoading composable ([f9654b2](https://github.com/flingyp/vadmire-admin/commit/f9654b21a732ee49f10b38525722ad15ab0d89f7))
- add useMitt composable ([4811e54](https://github.com/flingyp/vadmire-admin/commit/4811e549bcff7b57c51b3ab9f8c8dc85235b93ec))
- control whether tab bar is displayed ([d9b68dd](https://github.com/flingyp/vadmire-admin/commit/d9b68dd64f62f4935ac928d483903d60c3bb95db))
- integrate images preview plugin ([793d4f5](https://github.com/flingyp/vadmire-admin/commit/793d4f5b06fbb3691ceda6c0e2c0bf8a2bae7d16))
- table data export excel file ([49ad425](https://github.com/flingyp/vadmire-admin/commit/49ad4258fd80a4a8791d6030215f2cda8cacefa8))

## 1.0.0 (2023-05-23)

### Features

- add 404 and 500 common page ([e313ce9](https://github.com/flingyp/vadmire-admin/commit/e313ce9f1ce9a6d4f12dd723677836150735f2ea))
- add driver.js plugin and useDriver composable ([5d4b1da](https://github.com/flingyp/vadmire-admin/commit/5d4b1da61e3847d41f234ae337acab2061a35548))
- add echarts example ([a0058c7](https://github.com/flingyp/vadmire-admin/commit/a0058c7bda9403a0bdf3cc09d2ffe78f11986d9f))
- add pagination of table ([a31be24](https://github.com/flingyp/vadmire-admin/commit/a31be24bba1aaf2391ecdddf00ddf4de1610537a))
- add route cache judge and optimize progress bar ([bf9b4e7](https://github.com/flingyp/vadmire-admin/commit/bf9b4e73fd135db4a574fab49723ee5dea4db783))
- add useNaiveMessage composable ([05fb803](https://github.com/flingyp/vadmire-admin/commit/05fb80363f4484d7a3130ef3163f56947a3273a7))
- BaseLogoTitle auto collapsed and responsive width ([856a0e6](https://github.com/flingyp/vadmire-admin/commit/856a0e6bd8e5a720e5bff3a3683c65ad6d3e9d83))
- basic layout component ([38dc93e](https://github.com/flingyp/vadmire-admin/commit/38dc93e5e9bbacba179090a6ebd98ae644da00e4))
- common component add name of defineOptions ([cc7bc0a](https://github.com/flingyp/vadmire-admin/commit/cc7bc0a0b9a7c154a370b2e3290ca4eeff777fe2))
- completion of basic system layout ([3a0c78a](https://github.com/flingyp/vadmire-admin/commit/3a0c78abf8261427028a602426b6fa57914a03ad))
- component name standard and use iconify icon to menu ([dc6c324](https://github.com/flingyp/vadmire-admin/commit/dc6c3244b1f020ae86d82b56f4b9399dde03323a))
- config iframe route and internal、external link ([212133c](https://github.com/flingyp/vadmire-admin/commit/212133ca33d6a86161bdc0b9d4692e2ac802dc14))
- config mockjs ([fd01fd2](https://github.com/flingyp/vadmire-admin/commit/fd01fd2bc77181ec3559fbd1aab48dca37d09304))
- config system name ([9192847](https://github.com/flingyp/vadmire-admin/commit/9192847dc8c7615a5e6b55d1564dddab8657fb58))
- driver common config ([c5e2b86](https://github.com/flingyp/vadmire-admin/commit/c5e2b86c4b8b0ece291773c240caa2d37ace49d5))
- environment variable configuration ([4b38efd](https://github.com/flingyp/vadmire-admin/commit/4b38efda003111fdcd33770606c7af7cbf2882c5))
- **feature:** add table relevant composable and component ([31a2503](https://github.com/flingyp/vadmire-admin/commit/31a2503a9b1fdc541b28149ad4cdd4a8fc70e93d))
- file name standard and system theme mode ([0325c70](https://github.com/flingyp/vadmire-admin/commit/0325c70eb8aeabd4d34e0bbe163da594011df8b1))
- generate breadcrumb menu ([fc0b652](https://github.com/flingyp/vadmire-admin/commit/fc0b6528ad08891506c9269326bcd2979cee7964))
- global route handle process ([1e20a07](https://github.com/flingyp/vadmire-admin/commit/1e20a07742dacb970d407352724350d910ea17fb))
- Global_Menu、Global_LogoTitle、Global_Sider_Collapse ([7f8aaac](https://github.com/flingyp/vadmire-admin/commit/7f8aaace40454ea934eade8a47e94536d022e303))
- globalButtonTabBar component ([6384a98](https://github.com/flingyp/vadmire-admin/commit/6384a98a0b5161ed5cfb9b1cb79a5ee83b2cfb8f))
- GlobalCollapsedSiderbar、GlobalFullScreen component ([e9a19c1](https://github.com/flingyp/vadmire-admin/commit/e9a19c1717be0b0f8293b80f88b2ef1aab017d46))
- GlobalTabBar component ([e5a1738](https://github.com/flingyp/vadmire-admin/commit/e5a17389b8cd140215f3b8662086f39349d57b61))
- handle footer visibility ([7a46f79](https://github.com/flingyp/vadmire-admin/commit/7a46f79b834b83e2fd460bdd959ed7f612a4ee2b))
- handle reload page ([635881f](https://github.com/flingyp/vadmire-admin/commit/635881fe7fecf19323be233866702dc02c22b9c4))
- handle to remove tabbar menu ([28146f0](https://github.com/flingyp/vadmire-admin/commit/28146f089f8ff839dae9084f5a80d566c9d992b8))
- integrate ECharts ([f3dc804](https://github.com/flingyp/vadmire-admin/commit/f3dc804d00c5dd54c1fd8ee4b7743c9a6dc72326))
- integrate i18n plugin ([d2556c8](https://github.com/flingyp/vadmire-admin/commit/d2556c81c46f66d63c375467fb4fc299692db1b3))
- integrate naive ui component view page ([8ae0d24](https://github.com/flingyp/vadmire-admin/commit/8ae0d24a2caf012555ef5916266effed887c973f))
- integrate spa loading show plugin ([25a62a5](https://github.com/flingyp/vadmire-admin/commit/25a62a568e5feee8cebac668b05d80ef4ae5bd34))
- integrate Vditor ([00bb256](https://github.com/flingyp/vadmire-admin/commit/00bb256fd3a7145c26e13206ca0e4aadcc2af4cd))
- integrate vite-plugin-clear-console plugin ([130d984](https://github.com/flingyp/vadmire-admin/commit/130d984821eb89b729c6412d4e2df229935628d8))
- integrate WangEditor ([a4298cd](https://github.com/flingyp/vadmire-admin/commit/a4298cddd7e09fa3163ad1e6d03bf4dbfbc2cde9))
- integrate XGPlayer plugin ([6074585](https://github.com/flingyp/vadmire-admin/commit/6074585be9e33a1b15ddeff5aede1087f3d3bd99))
- introduction iconify to use ways ([daf5fc9](https://github.com/flingyp/vadmire-admin/commit/daf5fc917b8b8ab55f6a994d4f8f520c236474a6))
- introduction permission ([bb657d8](https://github.com/flingyp/vadmire-admin/commit/bb657d81f60b471bdf713a2c16f3801e622b4452))
- multilevel route function ([91e4bb4](https://github.com/flingyp/vadmire-admin/commit/91e4bb4ab0ce1c33f6c96cb45e3a1ba71ddd0858))
- online website to use SEVER mode ([febfd2a](https://github.com/flingyp/vadmire-admin/commit/febfd2a911107e5e33058eabf862aaa0564c52cc))
- rewrite permission page and add v-permission directive ([fa0f72e](https://github.com/flingyp/vadmire-admin/commit/fa0f72e1af2ee28c651e64036dd78f5ccd28fa9e))
- SPA loading style ([bbfad8e](https://github.com/flingyp/vadmire-admin/commit/bbfad8e2bb2ad44d7c978f0934f77dbec2629c01))
- system auth static page compilation ([3fd2748](https://github.com/flingyp/vadmire-admin/commit/3fd2748a7f6ac42ca6fd51b6040f4e6ca8ea62f1))
- system config and copy reset config ([82b3e98](https://github.com/flingyp/vadmire-admin/commit/82b3e9852c7c4e4d87d5e55f2acf5dc981baa74b))
- system handle route form in SERVER mode ([65510a8](https://github.com/flingyp/vadmire-admin/commit/65510a8e7b965b528d5c353115a641d8dcd191e4))
- system page switch transition effect ([0031417](https://github.com/flingyp/vadmire-admin/commit/00314177da2c03b0d46742c09c3f23acb6f47697))
- system primary color config ([b15dc7e](https://github.com/flingyp/vadmire-admin/commit/b15dc7e4b04d72373649069ffd9cf4c8f64cddea))
- table pagination by remote interface control ([c8d76e5](https://github.com/flingyp/vadmire-admin/commit/c8d76e5e5b0f8aa6ac5e4d6c54661a7166796b37))
- to use swiper plugin to realize tab menu scroll function ([3bb8a03](https://github.com/flingyp/vadmire-admin/commit/3bb8a039954aef195f03fbe0739379c6f430e69a))
- update version of vue to 3.3.x ([631e98e](https://github.com/flingyp/vadmire-admin/commit/631e98e863488ce27960b89f30bd577956e35122))
- VAdmireConfig add fixedTabBar attribute ([9e7dca6](https://github.com/flingyp/vadmire-admin/commit/9e7dca6d2c444b55e68aee95b75f2904bb43485a))

### Bug Fixes

- correct typos ([1495adc](https://github.com/flingyp/vadmire-admin/commit/1495adcb1c66528423d5ec119bbfc5e8ae2bede9))
- document title change when route navigator ([4cdc079](https://github.com/flingyp/vadmire-admin/commit/4cdc079a5370013683777b74666b8148adb49b8f))
- handle secondary route loss and not generate ([b28dda1](https://github.com/flingyp/vadmire-admin/commit/b28dda1d13a29108400324c381c77fa68b8ce4cf))
