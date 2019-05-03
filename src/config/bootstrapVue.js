import Vue from 'vue';

// Forms / Inputs
import bForm from 'bootstrap-vue/es/components/form/form';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback';
import bFormFile from 'bootstrap-vue/es/components/form-file/form-file';
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
import bInputGroup from 'bootstrap-vue/es/components/input-group';
import bInputGroupText from 'bootstrap-vue/es/components/input-group/input-group-text';
import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bAlert from 'bootstrap-vue/es/components/alert/alert';

Vue.component('b-form', bForm);
Vue.component('b-form-group', bFormGroup);
Vue.component('b-form-radio-group', bFormRadioGroup);
Vue.component('b-form-radio', bFormRadio);
Vue.component('b-form-input', bFormInput);
Vue.component('b-form-invalid-feedback', bFormInvalidFeedback);
Vue.component('b-form-file', bFormFile);
Vue.component('b-form-textarea', bFormTextarea);
Vue.component('b-form-select', bFormSelect);
Vue.use(bInputGroup);
Vue.component('b-input-group-text', bInputGroupText);
Vue.component('b-form-checkbox', bFormCheckbox);
Vue.component('b-modal', bModal);
Vue.component('b-alert', bAlert);

// Buttons
import bButton from 'bootstrap-vue/es/components/button/button';
import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';
Vue.component('b-button', bButton);
Vue.component('b-button-group', bButtonGroup);

// Tables
import bTable from 'bootstrap-vue/es/components/table/table';
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
Vue.component('b-table', bTable);
Vue.component('b-pagination', bPagination);

// Dropdown
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown';
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item';
Vue.component('b-dropdown', bDropdown);
Vue.component('b-dropdown-item', bDropdownItem);

// Directives
import vBTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip';
Vue.directive('b-tooltip', vBTooltip);

// Badges
import bBadge from 'bootstrap-vue/es/components/badge/badge';
Vue.component('b-badge', bBadge);

// Progress
import { Progress } from 'bootstrap-vue/es/components';
Vue.use(Progress);

// Toggle
import vBToggle from 'bootstrap-vue/es/directives/toggle/toggle';
Vue.directive('b-toggle', vBToggle);

// Collapse
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
Vue.component('b-collapse', bCollapse);

// List Group
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
Vue.component('b-list-group', bListGroup);

// List Group Item
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item';
Vue.component('b-list-group-item', bListGroupItem);

// PopOver
import bPopover from 'bootstrap-vue/es/components/popover/popover';
Vue.component('b-popover', bPopover);

// Card
import bCard from 'bootstrap-vue/es/components/card/card';
Vue.component('b-card', bCard);

// Card Text
import bCardText from 'bootstrap-vue/es/components/card/card-text';
Vue.component('b-card-text', bCardText);

// Card Title
import bCardTitle from 'bootstrap-vue/es/components/card/card-title';
Vue.component('b-card-title', bCardTitle);

// Card SubTitle
import bCardSubTitle from 'bootstrap-vue/es/components/card/card-sub-title';
Vue.component('b-card-sub-title', bCardSubTitle);

// Card Img
import bCardImg from 'bootstrap-vue/es/components/card/card-img';
Vue.component('b-card-img', bCardImg);

// Card Body
import bCardBody from 'bootstrap-vue/es/components/card/card-body';
Vue.component('b-card-body', bCardBody);

// Card Group
import bCardGroup from 'bootstrap-vue/es/components/card/card-group';
Vue.component('b-card-group', bCardGroup);

// Breadcrumbs
import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb';
Vue.component('b-breadcrumb', bBreadcrumb);

// Nav
import bNav from 'bootstrap-vue/es/components/nav/nav';
Vue.component('b-nav', bNav);

import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
Vue.component('b-nav-item', bNavItem);

import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown';
Vue.component('b-nav-item-dropdown', bNavItemDropdown);

// Navbar
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
Vue.component('b-navbar', bNavbar);

import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
Vue.component('b-navbar-brand', bNavbarBrand);

import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
Vue.component('b-navbar-nav', bNavbarNav);

import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
Vue.component('b-navbar-toggle', bNavbarToggle);

// Image
import bImg from 'bootstrap-vue/es/components/image/img';
Vue.component('b-img', bImg);

// Image
import bImgLazy from 'bootstrap-vue/es/components/image/img-lazy';
Vue.component('b-img-lazy', bImgLazy);
