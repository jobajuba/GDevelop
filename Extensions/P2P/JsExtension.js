// @flow
/**
 * This is a declaration of an extension for GDevelop 5.
 *
 * ℹ️ Changes in this file are watched and automatically imported if the editor
 * is running. You can also manually run `node import-GDJS-Runtime.js` (in newIDE/app/scripts).
 *
 * The file must be named "JsExtension.js", otherwise GDevelop won't load it.
 * ⚠️ If you make a change and the extension is not loaded, open the developer console
 * and search for any errors.
 *
 * More information on https://github.com/4ian/GDevelop/blob/master/newIDE/README-extensions.md
 */

/*::
// Import types to allow Flow to do static type checking on this file.
// Extensions declaration are typed using Flow (like the editor), but the files
// for the game engine are checked with TypeScript annotations.
import { type ObjectsRenderingService, type ObjectsEditorService } from '../JsExtensionTypes.flow.js'
*/

module.exports = {
  createExtension: function(_/*: (string) => string */, gd/*: libGDevelop */) {
    const extension/*: gdPlatformExtension */ = new gd.PlatformExtension();
    extension.setExtensionInformation(
      'P2P',
      _('Peer-to-Peer communication (experimental)'),
      _(
        'Adds possibility to connect multiple game instances together via WebRTC (P2P)'
      ),
      'Arthur Pacaud (arthuro555)',
      'MIT'
    )
    .setExtensionHelpPath('/all-features/p2p');

    extension
      .addCondition(
        'OnEvent',
        _('Event triggered by peer'),
        _('Triggers once when a connected client sends the event'),
        _('Event _PARAM0_ received from other client'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('Event name'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.onEvent');

    extension
      .addAction(
        'Connect',
        _('Connect to another client'),
        _('Connects the current client to another client using its id'),
        _('Connect to P2P client _PARAM0_'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('ID of the other client'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.connect');

    extension
      .addAction(
        'SendToAll',
        _('Trigger event on all connected clients'),
        _('Triggers an event on all connected clients'),
        _('Trigger event _PARAM0_ on all connected clients (extra data: _PARAM1_)'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('Event name'), '', false)
      .addParameter('string', _('Extra data (optional)'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.sendDataToAll');

    extension
      .addAction(
        'SendToOne',
        _('Trigger event on a specific client'),
        _('Triggers an event on a specific connected client'),
        _('Trigger event _PARAM1_ on client _PARAM0_ (extra data: _PARAM2_)'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('ID of the other client'), '', false)
      .addParameter('string', _('Event name'), '', false)
      .addParameter('string', _('Extra data (optional)'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.sendDataTo');

      extension
      .addAction(
        'SendToAllVariable',
        _('Trigger event on all connected clients (variable)'),
        _('Triggers an event on all connected clients'),
        _('Trigger event _PARAM0_ on all connected clients (extra data: _PARAM1_)'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('Event name'), '', false)
      .addParameter('scenevar', _('Variable containing the extra data'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.sendDataToAll');

    extension
      .addAction(
        'SendToOneVariable',
        _('Trigger event on a specific client (variable)'),
        _('Triggers an event on a specific connected client'),
        _('Trigger event _PARAM1_ on client _PARAM0_ (extra data: _PARAM2_)'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('ID of the other client'), '', false)
      .addParameter('string', _('Event name'), '', false)
      .addParameter('scenevar', _('Variable containing the extra data'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.sendVariableTo');

    extension
      .addAction(
        'GetEventVariable',
        _('Get event data (variable)'),
        _(
          'Store the data of the specified event in a variable. ' + 
          'Check in the conditions that the event was received using the "Event received" condition.'
        ),
        _('Overwrite _PARAM1_ with variable sent with last trigger of _PARAM0_'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg',
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('Event name'), '', false)
      .addParameter('scenevar', _('Variable where to store the received data'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.getEventVariable');

    extension
      .addStrExpression(
        'GetEventData',
        _('Get event data'),
        _('Returns the data received when the specified event was last triggered'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg'
      )
      .addParameter('string', _('Event name'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.getEventData');

    extension
      .addStrExpression(
        'GetID',
        _('Get client ID'),
        _('Gets the current client ID of the current game instance'),
        _('P2P (experimental)'),
        'JsPlatform/Extensions/p2picon.svg'
      )
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/P2P/A_peer.js')
      .addIncludeFile('Extensions/P2P/B_p2ptools.js')
      .setFunctionName('gdjs.evtTools.p2p.getCurrentId');

    return extension;
  },
  runExtensionSanityTests: function(gd /*: libGDevelop */, extension /*: gdPlatformExtension*/) {
    return [];
  },
};
