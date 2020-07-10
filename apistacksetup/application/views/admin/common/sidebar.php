<div class="left side-menu">
    <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
    <i class="ion-close"></i>
    </button>
    <!-- LOGO -->
    <div class="topbar-left">
        <div class="text-center"><!-- 
            {{-- <a href="index.html" class="logo"><i class="mdi mdi-assistant"></i> Annex</a> --}} -->
             <a href="<?php echo base_url() ?>" class="logo"><img src="<?php echo base_url() ?>/assets/images/logo.png" height="24" alt="logo"></a> 
        </div>
    </div>
    <div class="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
            <ul>
                <li class="menu-title">Main</li>
                <li>
                    <a href="<?php echo base_url() ?>" class="waves-effect">
                    <i class="mdi mdi-airplay"></i>
                    <span> Dashboard </span>
                    </a>
                </li>

                <li>
                    <a href="<?php echo base_url('admin/project_list') ?>" class="waves-effect">
                    <i class="mdi mdi-airplay"></i>
                        <span> Project </span>
                    </a>
                </li>

                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-map-marker-multiple"></i><span> Skills </span></a>
                    <ul class="list-unstyled">
                        <li><a href="<?php echo base_url('admin/add_new_skills') ?>"> Add new skill </a></li>
                        <li><a href=""> Skills list </a></li>
                    </ul>
                </li>


               
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
    <!-- end sidebarinner -->
</div>