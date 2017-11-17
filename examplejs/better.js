<Navigator>
    <Scene
        transition={Navigator.transitions.standard}
        reference={'login'}
        component={LoginScene} />
    <Scene
        transition={Navigator.transitions.standard}
        reference={'dashboard'}
        component={DashboardScene} />
    ...
</Navigator>

<TabNavigator>
    <Scene
        icon={require('static/icon-1.png')}
        reference={'home'}
        component={Dashboard} />
    <Scene
        icon={require('static/icon-2.png')}
        reference={'notifications'}
        component={Notifications} />
    ...
</TabNavigator>
